import test from '@playwright/test'
test ("Create Individuals", async({page})=>{
    await page.goto("https://login.salesforce.com")
    await page.waitForTimeout(2000)
    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")    
    await page.locator("//input[@name='pw']").fill("TestLeaf@2025")    
    await page.locator("//input[contains(@class,'button r4')]").click()
    await page.waitForTimeout(2000)

    await page.locator("//button[@title='App Launcher']").click()
    await page.waitForTimeout(2000)
    await page.getByLabel("View All Applications").click()
    await page.waitForTimeout(2000)

    await page.locator("//a[@data-label='Individuals']").click()
    await page.waitForTimeout(2000)
    await page.locator("//input[@name='Individual-search-input']").fill("Divya")
    await page.locator("//input[@name='Individual-search-input']").press('Enter')
    await page.waitForTimeout(2000)
    await page.locator("(//a[@title='Divya'])[2]").click()
    await page.waitForTimeout(2000)
    await page.locator("//a[@title='Edit']").click()
    await page.locator("//div[contains(@class,'salutation')]").click()
    await page.locator("//a[text()='Mr.']").click()
    await page.locator("//input[@placeholder='First Name']").fill("Diana")
    await page.locator("//span[text()='Save']").click()
    await page.waitForTimeout(2000)

})
