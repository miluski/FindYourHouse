export async function getIsUserExists(email: string) {
  const response = await fetch(
    `http://localhost:8080/api/users/email/${email}`,
  );
  return await response.json();
}
