import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import { DataContext } from "../DataProvider";
import InventoryScreen from "./screens/InventoryScreen";
import MOCK_DATA from "../mockdata.json";

describe("InventoryScreen", () => {
  const navigation = { navigate: jest.fn() };
  const route = { name: "Inventory" };

  it("renders correctly", () => {
    const { getByText, toJSON } = render(
      <DataContext.Provider value={{ MOCK_DATA }}>
        <InventoryScreen navigation={navigation} route={route} />
      </DataContext.Provider>
    );

    expect(getByText("Inventory")).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
