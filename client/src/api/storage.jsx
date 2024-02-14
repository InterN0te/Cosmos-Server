import wrap from './wrap';

const mounts = {
  list: () => {
    return wrap(fetch('/cosmos/api/mounts', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
    }))
  }
};

const disks = {
  list: () => {
    return JSON.parse(`{"data":[{"name":"/dev/sda","type":"disk","size":16000900661248,"rota":true,"serial":"ZR7025DW","wwn":"0x5000c500dc27359d","vendor":"ATA     ","model":"ST16000NM001J-2T","rev":"SS02","children":[{"name":"/dev/sda1","type":"part","size":16000899595776,"rota":true,"wwn":"0x5000c500dc27359d","fstype":"linux_raid_member","partuuid":"ba287f4b-e094-df4f-ac78-07d2abc13b04","children":[{"name":"/dev/md2","type":"raid6","size":128006110576640,"rota":true,"fstype":"crypto_LUKS","children":[{"name":"/dev/mapper/securehdd","type":"crypt","size":128006093799424,"rota":true,"mountpoint":"/mnt/secure","fstype":"ext4"}]}]}]},{"name":"/dev/sdb","type":"disk","size":16000900661248,"rota":true,"serial":"ZR701TEX","wwn":"0x5000c500dc2714c2","vendor":"ATA     ","model":"ST16000NM001J-2T","rev":"SS02","children":[{"name":"/dev/sdb1","type":"part","size":16000899595776,"rota":true,"wwn":"0x5000c500dc2714c2","fstype":"linux_raid_member","partuuid":"99c8bba5-9af9-464a-b21b-c4d4d321054b","children":[{"name":"/dev/md2","type":"raid6","size":128006110576640,"rota":true,"fstype":"crypto_LUKS","children":[{"name":"/dev/mapper/securehdd","type":"crypt","size":128006093799424,"rota":true,"mountpoint":"/mnt/secure","fstype":"ext4"}]}]}]},{"name":"/dev/sdc","type":"disk","size":16000900661248,"rota":true,"serial":"ZR602277","wwn":"0x5000c500dc27124c","vendor":"ATA     ","model":"ST16000NM001J-2T","rev":"SS02","children":[{"name":"/dev/sdc1","type":"part","size":16000899595776,"rota":true,"wwn":"0x5000c500dc27124c","fstype":"linux_raid_member","partuuid":"264ec357-569e-f046-b355-17112452b740","children":[{"name":"/dev/md2","type":"raid6","size":128006110576640,"rota":true,"fstype":"crypto_LUKS","children":[{"name":"/dev/mapper/securehdd","type":"crypt","size":128006093799424,"rota":true,"mountpoint":"/mnt/secure","fstype":"ext4"}]}]}]},{"name":"/dev/sdd","type":"disk","size":16000900661248,"rota":true,"serial":"ZR602233","wwn":"0x5000c500dc27a3e8","vendor":"ATA     ","model":"ST16000NM001J-2T","rev":"SS02","children":[{"name":"/dev/sdd1","type":"part","size":16000899595776,"rota":true,"wwn":"0x5000c500dc27a3e8","fstype":"linux_raid_member","partuuid":"dc8accb8-3ef1-824b-ae72-a2a018f8c93e","children":[{"name":"/dev/md2","type":"raid6","size":128006110576640,"rota":true,"fstype":"crypto_LUKS","children":[{"name":"/dev/mapper/securehdd","type":"crypt","size":128006093799424,"rota":true,"mountpoint":"/mnt/secure","fstype":"ext4"}]}]}]},{"name":"/dev/sde","type":"disk","size":16000900661248,"rota":true,"serial":"71A0A063FVNG","wwn":"0x5000039b08d057c3","vendor":"ATA     ","model":"TOSHIBA_MG08ACA1","rev":"0103","children":[{"name":"/dev/sde1","type":"part","size":16000899595776,"rota":true,"wwn":"0x5000039b08d057c3","fstype":"linux_raid_member","partuuid":"c459597c-45ef-c24d-83a5-f382b43893cf","children":[{"name":"/dev/md2","type":"raid6","size":128006110576640,"rota":true,"fstype":"crypto_LUKS","children":[{"name":"/dev/mapper/securehdd","type":"crypt","size":128006093799424,"rota":true,"mountpoint":"/mnt/secure","fstype":"ext4"}]}]}]},{"name":"/dev/sdf","type":"disk","size":16000900661248,"rota":true,"serial":"ZR7025EB","wwn":"0x5000c500dc26fe9e","vendor":"ATA     ","model":"ST16000NM001J-2T","rev":"SS02","children":[{"name":"/dev/sdf1","type":"part","size":16000899595776,"rota":true,"wwn":"0x5000c500dc26fe9e","fstype":"linux_raid_member","partuuid":"f0d37b26-86c0-de42-afb6-0b6f573ef05a","children":[{"name":"/dev/md2","type":"raid6","size":128006110576640,"rota":true,"fstype":"crypto_LUKS","children":[{"name":"/dev/mapper/securehdd","type":"crypt","size":128006093799424,"rota":true,"mountpoint":"/mnt/secure","fstype":"ext4"}]}]}]},{"name":"/dev/sdg","type":"disk","size":16000900661248,"rota":true,"serial":"X1E0A1XGFVNG","wwn":"0x5000039b38d188bf","vendor":"ATA     ","model":"TOSHIBA_MG08ACA1","rev":"0103","children":[{"name":"/dev/sdg1","type":"part","size":16000899595776,"rota":true,"wwn":"0x5000039b38d188bf","fstype":"linux_raid_member","partuuid":"0e38f1c6-7f3a-da48-bd7c-2c498b0c0445","children":[{"name":"/dev/md2","type":"raid6","size":128006110576640,"rota":true,"fstype":"crypto_LUKS","children":[{"name":"/dev/mapper/securehdd","type":"crypt","size":128006093799424,"rota":true,"mountpoint":"/mnt/secure","fstype":"ext4"}]}]}]},{"name":"/dev/sdh","type":"disk","size":16000900661248,"rota":true,"serial":"ZR7024CW","wwn":"0x5000c500dc26f457","vendor":"ATA     ","model":"ST16000NM001J-2T","rev":"SS02","children":[{"name":"/dev/sdh1","type":"part","size":16000899595776,"rota":true,"wwn":"0x5000c500dc26f457","fstype":"linux_raid_member","partuuid":"290d0373-e4a4-4841-88f5-a20be9139329","children":[{"name":"/dev/md2","type":"raid6","size":128006110576640,"rota":true,"fstype":"crypto_LUKS","children":[{"name":"/dev/mapper/securehdd","type":"crypt","size":128006093799424,"rota":true,"mountpoint":"/mnt/secure","fstype":"ext4"}]}]}]},{"name":"/dev/sdi","type":"disk","size":16000900661248,"rota":true,"serial":"ZR702532","wwn":"0x5000c500dc2719bd","vendor":"ATA     ","model":"ST16000NM001J-2T","rev":"SS02","children":[{"name":"/dev/sdi1","type":"part","size":16000899595776,"rota":true,"wwn":"0x5000c500dc2719bd","fstype":"linux_raid_member","partuuid":"c9c933d9-9b04-244a-9a7c-63418a69a082","children":[{"name":"/dev/md2","type":"raid6","size":128006110576640,"rota":true,"fstype":"crypto_LUKS","children":[{"name":"/dev/mapper/securehdd","type":"crypt","size":128006093799424,"rota":true,"mountpoint":"/mnt/secure","fstype":"ext4"}]}]}]},{"name":"/dev/sdj","type":"disk","size":16000900661248,"rota":true,"serial":"ZR7025EQ","wwn":"0x5000c500dc26f17b","vendor":"ATA     ","model":"ST16000NM001J-2T","rev":"SS02","children":[{"name":"/dev/sdj1","type":"part","size":16000899595776,"rota":true,"wwn":"0x5000c500dc26f17b","fstype":"linux_raid_member","partuuid":"495c80e3-ae49-4245-86ff-171e0c67af50","children":[{"name":"/dev/md2","type":"raid6","size":128006110576640,"rota":true,"fstype":"crypto_LUKS","children":[{"name":"/dev/mapper/securehdd","type":"crypt","size":128006093799424,"rota":true,"mountpoint":"/mnt/secure","fstype":"ext4"}]}]}]},{"name":"/dev/nvme1n1","type":"disk","size":960197124096,"rota":false,"serial":"S437NC0R203374","wwn":"eui.34333730522033740025384300000001","model":"SAMSUNG MZQLB960HAJR-00007","children":[{"name":"/dev/nvme1n1p1","type":"part","size":1073741824,"rota":false,"wwn":"eui.34333730522033740025384300000001","fstype":"linux_raid_member","partuuid":"d8c72f27-01","children":[{"name":"/dev/md0","type":"raid1","size":1071644672,"rota":false,"mountpoint":"/boot","fstype":"ext4"}]},{"name":"/dev/nvme1n1p2","type":"part","size":959121285120,"rota":false,"wwn":"eui.34333730522033740025384300000001","fstype":"linux_raid_member","partuuid":"d8c72f27-02","children":[{"name":"/dev/md1","type":"raid1","size":958985994240,"rota":false,"fstype":"crypto_LUKS","children":[{"name":"/dev/mapper/luks-7fdaaaa1-98a7-4bc4-9500-0cef98526994","type":"crypt","size":958969217024,"rota":false,"mountpoint":"/","fstype":"ext4"}]}]}]},{"name":"/dev/nvme0n1","type":"disk","size":960197124096,"rota":false,"serial":"S437NC0R203369","wwn":"eui.34333730522033690025384300000001","model":"SAMSUNG MZQLB960HAJR-00007","children":[{"name":"/dev/nvme0n1p1","type":"part","size":1073741824,"rota":false,"wwn":"eui.34333730522033690025384300000001","fstype":"linux_raid_member","partuuid":"4d0ca7bb-01","children":[{"name":"/dev/md0","type":"raid1","size":1071644672,"rota":false,"mountpoint":"/boot","fstype":"ext4"}]},{"name":"/dev/nvme0n1p2","type":"part","size":959121285120,"rota":false,"wwn":"eui.34333730522033690025384300000001","fstype":"linux_raid_member","partuuid":"4d0ca7bb-02","children":[{"name":"/dev/md1","type":"raid1","size":958985994240,"rota":false,"fstype":"crypto_LUKS","children":[{"name":"/dev/mapper/luks-7fdaaaa1-98a7-4bc4-9500-0cef98526994","type":"crypt","size":958969217024,"rota":false,"mountpoint":"/","fstype":"ext4"}]}]}]}],"status":"OK"}`);
    // return wrap(fetch('/cosmos/api/disks', {
    //   method: 'GET',
    //   headers: {
    //       'Content-Type': 'application/json'
    //   },
    // }))
  }
};


export {
  mounts,
  disks
};