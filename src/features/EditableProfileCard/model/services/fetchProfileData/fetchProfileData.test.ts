import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { Profile } from "../../types/profile";

jest.mock("axios");

const data: Profile = {
  first: "Элина",
  lastname: "Зайнуллина",
  age: 22,
  currency: Currency.EUR,
  country: Country.Belarus,
  city: "Kazan",
  username: "admin",
  avatar: "https://bgstaff.ru/upload/bgstaff/pages/tekhnik.jpg",
};

describe("fetchProfileData.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: data }));
    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
