
#!/bin/sh

set -xe

if [ -z $1 ]; then
	echo Add a filename to command: ./build.sh filename

	else
    ts-node 66-plus-one.ts

    time ( ts-node 66-plus-one.ts) >&1 1>/dev/null 


fi
         
