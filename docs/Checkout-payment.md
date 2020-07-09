# Checkout-payment

This API is used to initiate the payment from user to payment service provider. 
This APi validates the service is up and request is successfully reached to payment parthers.


Request can be seen as where the token in authorizations is the response for API of token. How ever it is not mandtody to generate token again and again or to genreate token Via token generation API. You can self generate the API with dedicated auth scheme assigned on admin panel.

```json http
{
  "method": "post",
  "url": "http://localhost:3000/",
  "headers": {
    "Authorization": "UxjnkkasdBkasd6886838nasd",
    "Content-Type": "application/json"
  },
  "body": {
    "SenderMsisdn": "string",
    "ReferenceMsisdn": "string",
    "Amount": "string",
    "IsSuccess": true
  }
}
```
