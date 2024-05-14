import { describe, expect, it } from "vitest";
import { userServices } from "./userServices";
import { useRepositoryInMemory } from "../repositories/userRepositoryInMemory";

describe("test user create function", () => {
  it("should create a user", async () => {
    const user = {
      id: "1",
      name: "Eric Batista",
      email: "eric@gmail.com",
    };

    const userCreated = await userServices.create(user, useRepositoryInMemory);

    expect(userCreated).toHaveProperty("id");
    expect(userCreated).toHaveProperty("name");
  });
});
