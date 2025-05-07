/* JWT Signature Creation:
Header and Payload:
The header and payload are Base64Url encoded.

Concatenate Encoded Header and Payload:
The encoded header and payload are concatenated with a period (.) separator.

Hashing Algorithm:
A hashing algorithm (e.g., SHA-256) is used to create a hash of the concatenated header and payload.

Secret or Private Key:
The hash is then signed using a secret key (for HMAC algorithms like HS256) or a private key (for RSA algorithms like RS256).

Signing: The hash value is then encrypted using a private key (in the case of RSA algorithms like RS256). 
This encrypted hash value is the digital signature.

Private Key: The private key is part of an asymmetric key pair (private key and public key). 
The private key is kept secret and is used to create the digital signature.
Public Key: The corresponding public key is shared openly and is used to verify the digital signature.
More detail further

Example:
Let's consider the RS256 algorithm (RSA with SHA-256) as an example:

Header:
{
    "alg": "RS256",
    "typ": "JWT"
}

Payload:
{
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
}

Base64Url Encode: Encode the header and payload using Base64Url encoding.
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ

Encode the header and payload using Base64Url encoding.

Concatenate Encoded Header and Payload:
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ

Hashing Algorithm:
Use the SHA-256 hashing algorithm to create a hash of the concatenated header and payload.

Sign with Private Key:
Sign the hash using the RSA private key to create the signature.

Example Code for Creating a JWT with RS256:
Here is an example of how you can create a JWT using the jsonwebtoken library in Node.js:
const jwt = require('jsonwebtoken');
const fs = require('fs');

// Read the private key
const privateKey = fs.readFileSync('private.key');

// Create a JWT
const token = jwt.sign(
    { sub: '1234567890', name: 'John Doe', iat: Math.floor(Date.now() / 1000) },
    privateKey,
    { algorithm: 'RS256' }
);

console.log('Generated JWT:', token);

Summary:
Header and Payload: Base64Url encoded and concatenated.
Hashing Algorithm: Used to create a hash of the concatenated header and payload.
Secret or Private Key: Used to sign the hash, creating the signature.
By understanding this process, you can see how the hashing algorithm and the secret or private key work together to create the signature, ensuring the integrity and authenticity of the JWT. */



// Order of JWT
/* Yes, a JWT (JSON Web Token) is structured in a specific order, and you can differentiate between the 
header, payload, and signature when a JWT is given. The JWT is composed of three parts separated by dots (.):

Header: The first part of the JWT.
Payload: The second part of the JWT.
Signature: The third part of the JWT.

JWT Structure:
header.payload.signature

Example JWT:
eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

Header: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9
Payload: eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
Signature: SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

Decoding the JWT:
You can decode the header and payload parts of the JWT to retrieve their contents. These parts are Base64Url encoded, 
so you need to decode them from Base64Url to a readable JSON format.

Base64Url Decode Function:

The base64UrlDecode function decodes a Base64Url encoded string to a readable format.
const base64UrlDecode = (str) => {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
};

Splitting the JWT:

The JWT is split into its three parts: header, payload, and signature.
const [header, payload, signature] = token.split('.');

Decoding the Header and Payload:

The header and payload are decoded from Base64Url and parsed as JSON.
const decodedHeader = JSON.parse(base64UrlDecode(header));
const decodedPayload = JSON.parse(base64UrlDecode(payload));

Displaying the Decoded Parts:

The decoded header, payload, and signature are logged to the console.
Displaying the Decoded Parts:

The decoded header, payload, and signature are logged to the console.
 */

/***** Very important point
It's important to clarify that while the header of a JWT does specify the algorithm used for signing (e.g., RS256), 
it does not contain the private key itself. The private key is never included in the JWT and should be kept secret. 
The security of the JWT relies on the secrecy of the private key (or secret key in the case of HMAC).
 */

/*******Very IMportant information
 Public Key and Private Key:
 
Always private and public key give same function when passed through a hash
Hash is encrypted with a private key does not mean that you can decrypt the signature to original hash with private keys .Instead,
the process ensures the integrity and authenticity of the data.

Private Key:
The private key is kept secret and is used to create the digital signature.
It is stored securely on the backend server and should never be exposed to the public or to any unauthorized parties.
The security of the JWT relies on the secrecy of the private key.

Public Key:
The public key is used to verify the digital signature created by the private key.
It can be shared openly and is often distributed to clients or other services that need to verify the JWT.
The public key does not compromise the security of the JWT because it cannot be used to create a valid signature.
 */

/* Steps to Verify a JWT Using a Public Key:
Extract the JWT:
The JWT is typically passed in the Authorization header of an HTTP request.
Example: Authorization: Bearer <JWT>

Split the JWT:
The JWT consists of three parts separated by dots (.): header, payload, and signature.
Example JWT: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

Split the JWT into its three parts:
const [header, payload, signature] = token.split('.');

Base64Url Decode the Header and Payload:
Decode the Base64Url-encoded header and payload to retrieve their contents.
const base64UrlDecode = (str) => {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
};
const decodedHeader = JSON.parse(base64UrlDecode(header));
const decodedPayload = JSON.parse(base64UrlDecode(payload));

Recreate the Signature:
Concatenate the encoded header and payload with a period (.) separator.
const dataToVerify = `${header}.${payload}`;


Verify the Signature Using the Public Key:
Use the public key to verify the signature. This involves decrypting the signature with the public key and comparing it with the hash of the concatenated header and payload.
In practice, you would use a library like jsonwebtoken to handle this process.
 */