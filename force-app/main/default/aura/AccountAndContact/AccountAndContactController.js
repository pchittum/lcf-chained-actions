({
	doSave : function(component, event, helper) {
        
        let saveAccount = component.get('c.createAccount');
        let saveContact = component.get('c.createContact');
        
        //setup account action
        saveAccount.setParam('acct', component.get('v.account'));
        
        saveAccount.setCallback(this, function(response){
            console.log('in response');
            let saveState = response.getState();
            if (saveState === 'SUCCESS'){
            	console.log('success state');
            	let savedAcct = response.getReturnValue();
            	component.set('v.account', savedAcct);
                console.log(response.getReturnValue());
                console.log(savedAcct.Id);
            	
            	//here's where we get things ready to save the contact
//this one didn't seem to work: 
//            	let localContact = component.get('v.contact');
//            	localContact.AccountId = savedAcct.Id;
//this one neither
//                component.set('v.contact.AccountId', savedAcct.Id);
//            	let localContact = component.get('v.contact');
//            	//localContact.AccountId = savedAcct.Id;
            	let localContact = component.get('v.contact');
            	localContact.AccountId = savedAcct.Id;
                component.set('v.contact', localContact);
            	//localContact.AccountId = savedAcct.Id;

            	console.log('local contact');
            	console.log(component.get('v.contact'));
            	saveContact.setParam('cont', component.get('v.contact'));
            	
            	saveContact.setCallback(this, function(response){
            	
            		let contSaveState = response.getState();
            		
            		if (contSaveState = 'SUCCESS'){
            			let savedContact = response.getReturnValue();
            		    component.set('v.contact', savedContact);
            		    console.log('success to save contact');
            		}
            		
            	});
            	
            	$A.enqueueAction(saveContact);
            	
            } else {
            	console.log('in fail block');
//        		let resultsToast = $A.get("e.force:showToast");
//                resultsToast.setParams({
//                    "title": "Save Failed",
//                    "message": response.getReturnValue()
//                });
//                resultsToast.fire();
                console.log(response.getReturnValue());
            }
            
            console.log('finish callback');
        });
        
        
        //setup contact action
		saveContact.setParam('cont', component.get('v.contact'));
        
        
        $A.enqueueAction(saveAccount);
	}
})