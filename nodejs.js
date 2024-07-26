const { log } = require('console');
const fs = require('fs')

// fs.unlink('pathName','new location path', callback())
// remoce folder but of there is any file or something it will not remove

fs.rmdir("./copy", function(err){
    if(err) console.error(err);
    else console.log('done');
})
// if folder is not empty

// Error: ENOTEMPTY: directory not empty, rmdir 'C:\Users\Grey\Documents\New folder\PRODIGY_WB_5\copy'] {
//     errno: -4051,
//     code: 'ENOTEMPTY',
//     syscall: 'rmdir',
//     path: 'C:\\Users\\Grey\\Documents\\New folder\\PRODIGY_WB_5\\copy'
//   }

// in that case we can use rm

fs.rm("./copy", {recursive:true}, function(err){
    if(err) console.error(err);
    else console.log('done');
})
