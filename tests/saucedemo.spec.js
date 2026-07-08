import{test,expect} from '@playwright/test';
test('Login with valid credentials',async({page})=> {
    // open the saucedemo
    await page.goto('https://www.saucedemo.com/');
    // Enter the username
    await page.locator('[id="user-name"]').fill('standard_user');
    await page.locator('[id="password"]').fill('secret_sauce');
    await page.locator('[id="login-button"]').click();
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
   // await page.pause();
    //Add Backpack
    //await page.locator('[id="add-to-cart-sauce-labs-backpack"]').click();
    await page.getByRole('button', { name: 'Add to cart' }).click();
    //Verify badge
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
    //Open Cart
    await page.locator('.shopping_cart_link').click();
    //Verify product
   await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
});