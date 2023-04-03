
#!/bin/sh

set -xe

if [ -z $1 ]; then
	echo Add a filename to command: ./build.sh filename

	else
    ts-node 14-longest-common-prefix.ts

    time ( ts-node 14-longest-common-prefix.ts) >&1 1>/dev/null 


fi
         
