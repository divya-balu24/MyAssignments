import test, { expect } from '@playwright/test'
test ("Create Individuals", async({page})=>{
    await page.goto("https://login.salesforce.com")
    await page.waitForTimeout(3000)
    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")    
    await page.locator("//input[@name='pw']").fill("TestLeaf@2025")    
    await page.locator("//input[contains(@class,'button r4')]").click()
    await page.waitForTimeout(3000)

    await page.locator("//button[@title='App Launcher']").click()
    await page.waitForTimeout(2000)
    await page.getByLabel("View All Applications").click()
    await page.waitForTimeout(2000)
    await page.locator("//a[@data-label='Individuals']").click()
    await page.waitForTimeout(2000)

    await page.locator("(//span[@part='boundary'])[21]/lightning-primitive-icon").click()
    await page.locator("//span[text()='New Individual']").click()
    await page.locator("//input[@placeholder='Last Name']").fill("Veronica")
    await page.locator("//span[text()='Save']").click()

    await page.waitForTimeout(2000)
    await expect(page.locator("//div[text()='Individual']/following-sibling::div/span")).toHaveText("Veronica")

})
