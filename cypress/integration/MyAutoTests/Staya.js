describe('Тестирование авторизации Staya', function() {
    
    it('Авторизация Staya: правильный логин, правильный пароль', function() {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link')
        .click();
        
        cy.get('.auth-form > form > [type="email"]')
        .click() 
        .type('bigdamnheroN7@gmail.com');
        cy.get('.auth-form > form > [type="password"]')
        .click()
        .type('Strike1st'); 
        cy.get('.auth-form__submit')
        .click();
        cy.contains('Мои заказы');
            })
        });
    
it('Авторизация Staya: правильный логин, неправильный пароль', function() {
    cy.visit('https://staya.dog/');
    cy.get('.header-bottom__right--link')
    .click();
    
    cy.get('.auth-form > form > [type="email"]')
    .click() 
    .type('bigdamnheroN7@gmail.com');
    cy.get('.auth-form > form > [type="password"]')
    .click()
    .type('Strike2st'); 
    cy.get('.auth-form__submit')
    .click();
    
        });