import { ref } from "vue";

export function useFetchData(endpoint) {
  const data = ref(null);
  const status = ref("idle"); // idle, loading, success, error

  const fetchData = async () => {
    try {
      status.value = "loading";
      const baseUrl = process.env.NUXT_PUBLIC_BASE_URL || `http://${window.location.hostname}:${window.location.port}`;;

      const response = await fetch(new URL(endpoint, baseUrl));

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      data.value = await response.json();
      status.value = "success";
    } catch (error) {
      console.error(error);
      status.value = "error";
    }
  };

  return { data, status, fetchData };
}