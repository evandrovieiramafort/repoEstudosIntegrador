import {expect, test} from "@playwright/test"

test.describe("cefet-rj.br", () => {

    test.beforeEach(async ({page}) => {
        await page.goto("https://cefet-rj.br")
    })

    test("apresenta opção de calendario", async ( {page} )=> {
        const elemento = await page.getByText('Calendários')
        await expect(elemento).toBeVisible()
    })

    test("permite pesquisar um calendario", async ( {page} )=> {
        await page.fill("#portal-searchbox-field", "calendario nova friburgo")
        await page.click('button[type="submit"]')
        const elemento = await page.getByText('resultados encontrados')
        await expect(elemento).toBeVisible()
    })
})
