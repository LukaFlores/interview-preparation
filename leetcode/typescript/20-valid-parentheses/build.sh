
#!/bin/sh

set -xe

if [ -z $1 ]; then
	echo Add a filename to command: ./build.sh filename

	else
    ts-node 20-valid-parentheses.ts

    time ( ts-node 20-valid-parentheses.ts) >&1 1>/dev/null 


fi
         
