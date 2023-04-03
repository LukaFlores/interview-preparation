
#!/bin/sh

set -xe

if [ -z $1 ]; then
	echo Add a filename to command: ./build.sh filename

	else
    ts-node 9-palindrome-number.ts

    time ( ts-node 9-palindrome-number.ts) >&1 1>/dev/null 


fi
         
