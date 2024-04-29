# Communication Protocols

## HTTP VS HTTPS

- HTTP stands for Hypertext Transfer Protocol, while HTTPS stands for the same, but with Secure at the end. The 'S' in HTTPS stands for 'Secure', and it means that communication between your browser and the website you're accessing is encrypted.

1. HTTP: Data sent using HTTP is not secure and can be intercepted by third parties to gather data being passed back and forth. This can be a problem if you are transferring sensitive information such as credit card information or personal identifiers.

2. HTTPS: On the other hand, HTTPS provides encrypted communication and secure connection between a user's browser and a web server. Even if the data being sent is intercepted, it would be unreadable due to the encryption.

- The encryption provided by HTTPS is particularly important for maintaining privacy and security when users are conducting transactions or submitting form data.

- Switching to HTTPS requires obtaining a security certificate and installing it on the server, which often incurs additional costs and effort. However, given the additional security and the increasing privacy expectations of users, it's now considered best practice to use HTTPS for all websites, not just those handling sensitive data.

- Moreover, since 2014 Google has used HTTPS as a ranking signal, i.e., websites using HTTPS might get a slight ranking advantage in Google search results over those only using HTTP.
