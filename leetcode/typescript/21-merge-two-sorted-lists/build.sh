
#!/bin/sh

set -xe

if [ -z $1 ]; then
	echo Add a filename to command: ./build.sh filename

	else
    ts-node 21-merge-two-sorted-lists.ts

    time ( ts-node 21-merge-two-sorted-lists.ts) >&1 1>/dev/null 


fi
         
