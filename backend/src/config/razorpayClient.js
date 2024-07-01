const Razorpay = require('razorpay');

apiKey="rzp_test_hDIRpVVHfgG2gp"
apiSecret="2xSFumaU0dfvi0BMEWedfjux"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;