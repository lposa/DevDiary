# Redirect user to account or login based on if user is logged in or not

## Approach: 

1. I created a `useRedirect` hook to handle all redirects, takes in path to redirect to and a condition for the redirection.
2. We couldn't use `user` from the `useUserContext` because it always comes in as undefined at first - meaning we would always get a falsy value. It interupts the logic a bit and we need it to either be false or true to be able to use the `user` value.
3. I solved it by using the `token` from the `cookies` that we set during login. If `token` is present, that means user is logged in.
