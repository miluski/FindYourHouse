// Call this function in onClick assigned to add offer button

export async function startCheckout() {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:8080/api/payment/checkout", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const link = await response.json();
    window.location.href = link.checkoutUrl;
}