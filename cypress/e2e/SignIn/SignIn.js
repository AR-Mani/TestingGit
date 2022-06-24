import SignIn from '../../support/SignIn/SignInPO';

const signInPage = new SignIn();

describe('Verify the Sign In page',function(){
     it('SignIn With New User',function(){
        cy.visit('https://app-traxidy.thedemo.co/login/');
        signInPage.signInWithNewUser();
<<<<<<< HEAD
//mani dobara pull kr
=======
        //Hi I am AR Mani
        // Hi I am Ishaq.
>>>>>>> 371c0290a8b7c92666ac45799376083db7a52e55
    })
})

