# General Security

### Explain same origin policy

- By default, we can't load resources from another origin. How do images or frameworks work then? 
- We have exceptions, we can load a frame, but we can't read it (frames, images, objects,...)
- The Same Origin Policy (SOP) is a critical security concept implemented in web browsers to prevent Javascript code from making requests against a different origin than the one from which it was served.

- An origin is defined as a combination of URI scheme (http, https), hostname (www.google.com), and port number (80, 443). According to the policy, a web page script can only access data and interact with resources on the same origin.

- For example, if a request originates from a script hosted at http://example.com, this script can only interact with resources on http://example.com because it's considered as the 'same origin'. If it tries to request resources from http://another-example.com, then the browser would block this due to the Same Origin Policy, because they are considered different 'origins'.

- The policy is in place to ensure the isolation between different origins and prevent malicious activities such as Cross-Site Request Forgery (CSRF), Web Application Attacks like Cross-Site Scripting (XSS).

- However, there are ways to allow cross-origin communication when necessary. The most famous one among these is CORS (Cross-Origin Resource Sharing). CORS is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin. But it's crucial to use such practices wisely, keeping security in consideration.

### What are pre-flight requests and in which circumstances are we sending them?

- That's a special options HTTP verb that we are sending to check cors policy that is set up on backend side. If server gives us appropriate header the browser will know that it can send the desires request.
- Browser preflight such a request with an extra request using the OPTIONS method. From a response to it browser gets to know the CORS settings of the cross-origin server.

According to AI: 

1. Conditions for Sending a Pre-flight Request:

- Request Method: If the request uses methods other than GET, HEAD, or POST (e.g., PUT, DELETE, OPTIONS), or if it uses a custom HTTP method.
- Custom Headers: If the request includes headers other than the simple headers (Accept, Accept-Language, Content-Language, Content-Type).
- Content-Type: If the Content-Type header in the request is not one of the following: application/x-www-form-urlencoded, multipart/form-data, or text/plain.

2. Purpose of Pre-flight Request:

- Safety Check: The pre-flight request is a safety mechanism to protect against potentially harmful cross-origin requests (e.g., unauthorized API requests) initiated by malicious scripts.
- CORS Policy Check: It allows the server to indicate whether the actual cross-origin request (the request that the web page wants to make) is allowed by the server's CORS policy.
- Request Validation: The server can inspect the pre-flight request headers and respond with appropriate CORS headers (e.g., Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers) to grant or deny permission for the actual cross-origin request.

3. Sending the Pre-flight Request:

- Triggered by Browser: When a web page attempts to make a cross-origin request that meets the conditions requiring a pre-flight request, the browser automatically sends an HTTP OPTIONS request to the target server before sending the actual request.
- Handling by Server: The server then processes this OPTIONS request and responds with appropriate CORS headers indicating whether the actual request (with the specified method, headers, etc.) is permitted.
- Actual Request: If the pre-flight request is successful (i.e., the server responds with appropriate CORS headers allowing the request), the browser proceeds to send the actual cross-origin request.


### What is CSP - Content Security Policy

- Standard for protection web applications from content injections. Main purpose is to restrict the list of resources of which content can be loaded. 
- Can be set in the page meta-data. It can be also sent from the server in the header.


### Why in the first place teams behind browsers had to develop all these policies?

- Because of general attackers, hacker, browser wars. Cross-site scripting attacks, cross-site forgery, authorize a request to the backend, and pull out any info such as financial info. 
- What if I sanitize everything that I receive from the user , would that solve the problem? - That means nothing gets through without my consent.

### OWASP 10 

1. Injection (SQL, NoSQL, LDAP, OS) occurs when untrusted data is sent to an interpreter as part of a command or query. Filtering and validating untrusted input, escaping special characters are effective protective measures.
2. Broken authentication incorrect implementation of authentication or session management. To avoid, use multi-factor authentication, strong passwords, properly store and don't exposure credentials, limit, delay and log login attempts, limit session lifetime, use strong session IDs, rotate them on login.
3. Sensitive Data Exposure revealing such data as financial, healthcare, PII. With such data, attackers may conduct credit card fraud, identity theft, or other crimes. To protect: first, classify data processed, stored or transmitted, second, don't store them unnecessarily, third encrypt them properly either at rest or in transit.
4. XML External Entities (XEE) Many older or poorly configured XML processors evaluate external entity references within XML documents. Protection golden rule - avoid XML =) If it's not the case keep XML processors up-to-date, disable evaluation of external entities, implement whitelisting server-side input validation, use special tools.
5. Broken Access Control (Broken Authorization) It's typically wrong implemented, forgotten or incomplete control of authorized user's privileges. Use the following advices: with the only exception of public APIs deny all by default, implement access control mechanism, restrict access on OS level, log failures, invalidate tokens on a server.
6. Security Misconfiguration This is commonly a result of insecure default configurations, incomplete or incorrect configurations, open cloud storage, misconfigured HTTP headers, and verbose error messages containing sensitive information. To avoid simply don't do this shit, automate configuring environments, use different credentials, do not install any unnecessary features, keep all up-to-date, use automated control of configuration integrity.
7. Cross-Site Scripting XSS occurs whenever an application includes untrusted data in a new web page without proper validation or escaping, or updates an existing web page with user-supplied data using a browser API that can create HTML or JavaScript. Protective measures: using frameworks that automatically escape XSS by design, escaping untrusted HTTP request data, applying context-sensitive encoding, enabling a CSP.
8. Insecure Deserialization Insecure deserialization often leads to remote code execution or replay attacks, injection attacks, and privilege escalation attacks. The only safe architectural pattern is not to accept serialized objects from untrusted sources or to use serialization mediums that only permit primitive data types.
9. Using Components with Known Vulnerabilities Applications and APIs using components with known vulnerabilities may undermine application defences and enable various attacks and impacts. Avoid weird stuff from untrusted sources which you often do not need and if you can't - keep it up-to-date and use automated tools to validate the sources.
10. Insufficient Logging & Monitoring lack of logging and monitoring allows attackers to do their job. All red flags should be logged in a manageable manner, the monitoring system should be able to react in real-time. It's good to use protection frameworks for such purposes.


### Several ways to penetrate website security with XSS? 

- Redirection attacks, such as creating a website that looks the same way, and you redirect there from a the real website and steal users data.
- Imagine you are doing a payment, you get redirected to a third-party website where the actual payment happens, and the back to the original website.
- Protecting from these attacks is sanitizing and using cors.

### What is broken access control? 

- Sometimes users can have unintended permissions in other words, they have more access than they should have. This can lead to many issues.
- Let's say you use a cookie to store the role of the user, anyone can just open the dev tools and change it. 
- How can the XSS be linked to this? Redirects. User gets redirected to a website and the attacker uses `document.getCookie` to retrieve a cookie with roles and permissions.
- Protecting from this is using HTTP Cookies.
- We can use JWT to solve this as well, instead of using cookies. We have several browser APIs we can use. 
- What are these Web APIs? Cookies, session storage and local storage. Session storage is available for the tab you are on. Local storage is kept as long as you don't clear it.
- Also good to have expiration for tokens.

### Insufficient Logging & Monitoring

- What can we do to improve logging? Having log levels.
- How do we switch log levels?  Using environment variables. 
- How do prevent developers from putting something sensitive in the logs? Don't log username, passwords, payment info, any info about users. We can solve this as early as in PR reviews, or automated, searching for log objects and excluding fields with important info.

### How do we make sure that headers do not expose any information that we don't want to be seen there?


To ensure that HTTP headers do not expose any sensitive information that you do not want to be seen or intercepted by unauthorized parties, you can follow several best practices and security considerations:

1. **Minimize the Use of Custom Headers**: Avoid sending unnecessary custom headers in your HTTP requests and responses. Stick to standard headers whenever possible (e.g., `Content-Type`, `Authorization`) to reduce the risk of inadvertently exposing sensitive information.

2. **Avoid Sending Sensitive Data in Headers**: Refrain from including sensitive data (e.g., authentication tokens, user credentials, personally identifiable information) directly in HTTP headers. Instead, use appropriate secure methods for transmitting sensitive data (e.g., HTTPS, encrypted payloads).

3. **Use HTTPS for Secure Transmission**: Always use HTTPS (HTTP over SSL/TLS) to encrypt the entire HTTP communication between clients and servers. This helps protect the confidentiality and integrity of headers and payloads transmitted over the network.

4. **Avoid Hard-coding Sensitive Information**: Do not hard-code sensitive information (such as API keys, credentials) directly into your application's source code or configuration files. Use secure environment variables or secure vaults (e.g., HashiCorp Vault, AWS Secrets Manager) to manage and retrieve sensitive data dynamically.

5. **Implement Proper Access Controls**: Ensure that access to sensitive headers and information is restricted based on the principle of least privilege. Only authorized users and components should have access to sensitive headers.

6. **Use Secure Headers Configuration**: Configure web servers and applications to send secure HTTP headers to enhance security. For example:
    - Use security headers like `Content-Security-Policy`, `X-Frame-Options`, `X-XSS-Protection`, and `Strict-Transport-Security` to prevent various types of attacks (e.g., cross-site scripting, clickjacking).
    - Implement `Referrer-Policy` and `Feature-Policy` headers to control referrer information and browser features.

7. **Implement CORS Safely**: When using Cross-Origin Resource Sharing (CORS), configure server-side CORS policies to restrict which origins, methods, and headers are allowed for cross-origin requests. This helps prevent unauthorized exposure of sensitive headers.

8. **Regular Security Audits and Testing**: Conduct regular security audits and penetration testing of your web applications to identify and mitigate potential security vulnerabilities, including exposure of sensitive information through headers.
