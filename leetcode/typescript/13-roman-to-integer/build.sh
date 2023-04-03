
#!/bin/sh

set -xe

if [ -z $1 ]; then
	echo Add a filename to command: ./build.sh filename

	else
    ts-node 13-roman-to-integer.ts

    time ( ts-node 13-roman-to-integer.ts) >&1 1>/dev/null 


fi
         
