import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, getByText, render, waitFor } from "@testing-library/react";
import renderer from 'react-test-renderer';

import NoMatch from "../pages/NoMatch";
import NoMatchView from './views/NoMatch-view';

const BASE_URL = `http://localhost`;

const linkClick = (url) => {
    Object.defineProperty(window, "location", {
        value: {
            href: `${BASE_URL}${url}`,
        },
        writable: true,
    });
};

describe("Error component", () => {
    beforeEach(() => {
        global.window = Object.create(window);
        const url = `/temp`;
        linkClick(url);
    });

    it("render no match component", () => {
        const view = renderView();
        expect(view.errorContainer).toBeInTheDocument();
    });

    it("show error message and home page link", () => {
        const error = {
            message: "The page you are looking for was not found",
        };
        const view = renderView();
        expect(view.message).toBeInTheDocument();
        expect(getByText(view.errorContainer, error.message)).toBeInTheDocument();
        expect(view.homeLink).toBeInTheDocument();
    });

    it("on click of home link redirect to home page", async () => {
        const error = {
            message: "The page you are looking for was not found",
        };
        const view = renderView(error);
        const href = view.homeLink.getAttribute("href");
        view.homeLink.onclick = () => {
            linkClick(href);
        };
        expect(window.location.href).toBe("http://localhost/temp");
        await waitFor(() => fireEvent.click(view.homeLink));
        expect(window.location.href).toBe("http://localhost/");
    });
});

describe('Snapshot of no match test', () => {
    test('Snapshot of no match', () => {
        const tree = renderer.create(<NoMatch />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

const renderView = () => {
    const dom = render(<NoMatch />);
    return new NoMatchView(dom);
};