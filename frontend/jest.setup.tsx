jest.mock('./src/components/Header/Header', () => {
  return function HeaderView() {
    return <div data-testid='mockHeaderView'></div>;
  };
});

jest.mock("./src/google", () => ({
	googleUrlParams: {
		toString: () =>
			"client_id=mock_client_id&response_type=mock_token&scope=mock_scope&redirect_uri=mock_redirect_uri",
	},
}));
