import test from '@playwright/test'

test("Edit Lead", async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.waitForTimeout(4000)
    await page.locator("//input[@id='username']").fill("Demosalesmanager")    
    await page.locator("//input[@id='password']").fill("crmsfa")    
    await page.locator("//input[@class='decorativeSubmit']").click()
    await page.waitForTimeout(4000)

    await page.locator("//div[@id='label']/a[contains(text(),'CRM/SFA')]").click()
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//ul[@class='shortcuts']/li[2]/a[text()='Create Lead']").click()
    await page.waitForTimeout(4000)

    await page.locator("(//input[@name='companyName'])[2]").fill("FIS")
    await page.locator("(//input[@name='firstName'])[3]").fill("Rajesh")
    await page.locator("(//input[@name='lastName'])[3]").fill("Kumar")
    await page.locator("//input[@value='Create Lead']").click()
    await page.waitForTimeout(4000)

    await page.locator("//div[@class='frameSectionExtra']/a[text()='Edit']").click()
    await page.locator("(//input[@name='companyName'])[2]").fill("FISAC")
    await page.locator("//input[@value='Update']").click()
    await page.waitForTimeout(2000)

})
