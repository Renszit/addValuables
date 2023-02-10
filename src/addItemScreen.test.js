import { render, fireEvent, act, waitFor } from "@testing-library/react-native";
import React from "react";
import { DataContext } from "../DataProvider";
import AddItemScreen from "./screens/AddItemScreen";
import MOCK_DATA from "../mockdata.json";

import { ImagePicker } from "./sdk/ImagePicker";

const updateData = jest.fn();

const TestDataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={{ data: MOCK_DATA, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

describe("AddItemScreen", () => {
  it("updates data when the add button is pressed", async () => {
    const newData = {
      id: MOCK_DATA.length + 1,
      name: "Test item",
      value: "10",
      description: "This is a test item",
      photo: "https://picsum.photos/200/300/?blur",
    };

    const { getByLabelText } = render(
      <TestDataProvider>
        <AddItemScreen route={{}} navigation={{ goBack: () => {} }} />
      </TestDataProvider>
    );

    const addButton = getByLabelText("Add");
    const addPhotoButton = getByLabelText("pickPhoto");

    const spy = jest.spyOn(ImagePicker, "takePhoto").mockImplementation(() => {
      return Promise.resolve({
        canceled: false,
        assets: [{ uri: newData.photo }],
      });
    });

    act(() => {
      fireEvent.changeText(getByLabelText("nameInput"), newData.name);
    });

    act(() => {
      fireEvent.changeText(getByLabelText("valueInput"), newData.value);
    });

    act(() => {
      fireEvent.changeText(
        getByLabelText("descriptionInput"),
        newData.description
      );
    });

    await act(async () => {
      await fireEvent.press(addPhotoButton);
      await expect(spy).toHaveBeenCalled();
    });

    act(() => {
      fireEvent.press(addButton);
    });

    expect(updateData).toHaveBeenCalledWith(newData);
  });
});
