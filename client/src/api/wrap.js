let snackit;

export function wrapRClone(apicall) {
  return apicall.then(async (response) => {
    let rep = await response.json();
    if (response.status >= 400) {
      snackit(rep.error);
      const e = new Error(rep.error);
      e.status = response.status;
      e.code = response.status;
      throw e;
    }
    return rep;
  });
};

export default function wrap(apicall, noError = false) {
  return apicall.then(async (response) => {
    let rep;
    try {
      rep = await response.text();

      try {
        rep = JSON.parse(rep);
      } catch (err) {
        rep = {
          message: rep,
          status: response.status,
          code: response.status
        };
      }
    } catch (err) {
      if (!noError) {
        snackit('Server error');
        throw new Error('Server error');
      } else {
        const e = new Error(rep.message);
        e.status = rep.status;
        e.code = rep.code;
        throw e;
      }
    }

    if (response.status == 200) {
      return rep;
    } 

    if (!noError && rep.message) {
      snackit(rep.message);
    }
    
    const e = new Error(rep.message);
    e.status = rep.status;
    e.code = rep.code;
    throw e;
  });
}

export function setSnackit(snack) {
  snackit = snack;
}

export {
  snackit
};