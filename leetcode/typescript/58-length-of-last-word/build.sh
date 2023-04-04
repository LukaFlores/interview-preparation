
#!/bin/sh

set -xe

if [ -z $1 ]; then
	echo Add a filename to command: ./build.sh filename

	else
    ts-node 58-length-of-last-word.ts

    time ( ts-node 58-length-of-last-word.ts) >&1 1>/dev/null 


fi
         
