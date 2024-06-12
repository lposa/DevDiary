# TCP VS UDP

TCP is connection oriented – once a connection is established, data can be sent back and forth reliably in the same order. TCP is also heavy-weight. TCP chooses reliability over speed.

UDP on the other hand, is connection-less and does not guarantee delivery by skipping all the error-checking stuff. Hence, UDP is faster, simpler and more efficient.

One common example where TCP is used is the World Wide Web (browsing websites). It's used when you need to ensure that all data is fully received and in the right order.

UDP on the other hand, is often used for real-time services such as online gaming or streaming videos where losing some packets doesn't ruin the overall experience because there's no time to resend them.
