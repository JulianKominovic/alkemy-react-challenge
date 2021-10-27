import { authUser } from "../services/loginApi";
describe("CALLING AUTH API", () => {
  test("Post to API with empty data", async () => {
    const callToApi = await authUser("", "");
    expect(callToApi).toHaveProperty("error");
  });
  test("Post to API with wrong data", async () => {
    const callToApi = await authUser("2323", "12345");
    expect(callToApi).toHaveProperty("error");
  });
  test("Post to API with rigth data", async () => {
    const callToApi = await authUser("challenge@alkemy.org", "react");
    expect(callToApi).toHaveProperty("token");
  });
});
