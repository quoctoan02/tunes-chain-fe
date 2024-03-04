import { defaultChain } from "@/configs/chains.config"
import { API_URL } from "@/configs/endpoints.config"
import { ENV } from "@/configs/env.config"
import { GA_ID } from "@/configs/ga.config"
import { HOST } from "@/configs/host.config"
import { expect, test } from "vitest"

test("config", () => {
  expect(defaultChain).toBeTruthy()
  expect(ENV).toBeTruthy()
  expect(API_URL).toBeTruthy()
  expect(GA_ID).toBeTruthy()
  expect(HOST).toBeTruthy()
})
