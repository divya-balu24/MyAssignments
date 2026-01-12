import test, { expect } from '@playwright/test'
test ("Creat lead", async({page})=>{
    await page.goto("https://login.salesforce.com")
    await page.waitForTimeout(3000)
    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")    
    await page.locator("//input[@name='pw']").fill("TestLeaf@2025")    
    await page.locator("//input[contains(@class,'button r4')]").click()
    await page.waitForTimeout(3000)

    await page.locator("//button[@title='App Launcher']").click()
    await page.waitForTimeout(3000)
    await page.getByLabel("View All Applications").click()
    await page.waitForTimeout(3000)
    await page.locator("//one-app-launcher-app-tile[@data-name='Sales']").click()
    await page.waitForTimeout(3000)
    
    await page.locator("//span[text()='Leads']").first().click()
    await page.waitForTimeout(2000)
    await page.locator("//div[text()='New']").click()

    await page.locator("//button[@aria-label='Salutation'][@role='combobox']").click()
    await page.locator("//lightning-base-combobox-item[@data-value='Mr.']").click()
    await page.locator("//input[@name='lastName']").fill("Suresh") 
    await page.locator("//input[@name='Company']").fill("Testleaf") 
    await page.locator("//button[@name='SaveEdit']").click()

    await expect(page.locator("//slot/lightning-formatted-name")).toHaveText('Mr. Suresh');    
    await page.waitForTimeout(5000)    
    
})
