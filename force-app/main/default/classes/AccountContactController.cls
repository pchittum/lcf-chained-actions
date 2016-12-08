public class AccountContactController {
    
    @AuraEnabled
    public static Account createAccount(Account acct){
        
        insert acct;
        
        return acct;
        
    }
    
    @AuraEnabled
    public static Contact createContact(Contact cont){
        insert cont; 
        
        return cont;
    }

}