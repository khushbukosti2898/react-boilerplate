import { render, waitFor } from '@testing-library/react';
import ReactHelmet from '../components/common/ReactHelmet';

describe('Test document title', () => {
  test("Test page title is Form - Admin Panel", async () => {
    render(<ReactHelmet title="Form" />);
    await waitFor(() => expect(document.title).toBe("Form - Admin Panel"));
  });
  test("Test page title when no title", async () => {
    render(<ReactHelmet />);
    await waitFor(() => expect(document.title).toBe("Admin Panel"));
  });
});

