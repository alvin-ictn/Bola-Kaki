const webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BFJ2emNaRSLchNFpiF4OFvOiTif9zALm3ZHZBXQCXBEAAf_g8DuPQhVv_sezheayblKtFYeohed7q0LBzlNYxmc",
   "privateKey": "IdyxrBEMCnz7B-d_BuNqayB-s8gL_MTo98x0efG0PgQ"
};

webPush.setVapidDetails(
   'mailto:alvin@univrab.ac.id',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)

const pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/ciOcfSkfC3I:APA91bGLiVKRdZDiewk74Vt_9aPpqCPremL8gLNMvydkTS05vTn9RiYc13UQ886pAI0vwMSfy1HNUtWsYh_tkiWYzvnL0zytGvM-RiOZi_jXSxJ2c_o5YQNps6FfA7MpryoUQoaUKnPb",
   "keys": {
       "p256dh": "BAziXLzWtGRPLPz82E+eC+FRt/Ms5KXgxyVUu1ngLGPAypyx2DH6HBU5iDuKFPvLIsCRmUC13wLQ3DbPBawj7C0=",
       "auth": "8zAuuUy3zLDmr9GtP3iCBQ=="
   }
};

let payload = 'Yuk Lihat Perolehan Score masing - masing club!';
 
const options = {
   gcmAPIKey: '657917090225',
   TTL: 60
};

webPush.sendNotification(
   pushSubscription,
   payload,
   options
).then(x=>{
  console.log(x)
}).catch(err=>{
  console.error(err)
});