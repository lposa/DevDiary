# CSRF - Cross Site Request Forgery

- This is an attack vector aimed specifically at automatically authenticating requests. The Basic authentication, Cookies, and OAuth are vulnerable to this attack.

- It's typically performed by creating a malicious link (button, form, web page, or any) and inducing the user to interact with this link. This way user unintentionally requests an app he is already logged in to. Such a request may change credentials or perform a banking transaction.

## Key conditions

1. **Relevant Action:** This refers to any action that an attacker could potentially gain from if they managed to trick a user into performing it. For example, imagine a function on a bank's website that allows users to transfer money. If an attacker could trick a user into unknowingly running a script that performs this action, they could transfer money to the attacker's account.

2. **Cookie-Based Session Handling:** Websites typically keep you logged in by storing a "session cookie" on your computer. When you visit the site, your browser sends the cookie along with the request so the server recognizes you. However, this can be exploited in a CSRF attack. If the attacker can trick your browser into sending the cookie with their own forged request, the server would treat it as a legitimate action coming from you.

3. **No Unpredictable Request Parameters:** To carry out a CSRF attack, the attacker must accurately predict what a valid request to the target server looks like. For instance, in a password change function, if it doesn't require the current password to authorize the change, an attacker could easily forge a request that changes the user's password.

In summary, consider this scenario: You're in your home (the server) waiting for a friend (the user) with a pizza delivery (the request). You've told your friend to call you from a specific number (session cookie) to identify them without having to open the door. But a stranger (the attacker) manages to clone your friend's number and requests entry. And if the stranger knows you always order pepperoni pizza (parameters), you would have no reason to doubt the order (action) and accept it. This is analogous to a CSRF attack, where an attacker tricks you into making a request you didn't intend.


## Preventing CSRF Attacks

The most effective way to protect against CSRF attacks is by using a CSRF token in relevant requests. The token should have the following characteristics:

1. **Unpredictable with High Entropy:** Much like a session token, a CSRF token should be sufficiently random and complex, making it significantly hard for an attacker to guess.

2. **Tied to the User's Session:** The CSRF token should be linked or tied to a user's session. This means every user session has its own unique CSRF token so even if one is compromised, it doesn't affect any other sessions.

3. **Strictly Validated:** Before executing any action, the token should be strictly scrutinized or validated to ensure it's legitimate. If the token doesn't pass the validation check, the request should be denied.

To provide a clearer explanation, think of the CSRF token as an additional password. This 'password' (the CSRF token), is sent along with every sensitive request. It's unique each time and tied to your session, so even if someone managed to copy your original request, they wouldn't have this 'password', thus their request would fail the validation and be denied.
