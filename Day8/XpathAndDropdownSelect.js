import test from'@playwright/test'
test("Dropdown homework", async({page})=>{
    await page.goto("https://en-gb.facebook.com/")
    await page.waitForTimeout(2000)
    await page.locator("//a[text()='Create new account']").click()
    await page.waitForTimeout(2000)
    await page.locator("//input[@name='firstname']").fill("Rakes")
    await page.locator("//input[@name='lastname']").fill("Stud")
    await page.locator("//input[contains(@aria-label,'Mobile')]").fill("123456789")
    await page.locator("//input[@type='password']").fill("truth*is@God")
    await page.waitForTimeout(3000)
    await page.selectOption("[name='birthday_day']",{index:23})
    await page.selectOption("[title='Month']",{label:"Feb"})
    await page.selectOption("[name='birthday_year']",{value:"1992"})
    await page.waitForTimeout(3000)

})
