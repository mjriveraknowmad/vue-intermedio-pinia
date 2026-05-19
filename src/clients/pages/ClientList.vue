<script setup lang="ts">
import ClientList from '@/clients/components/ClientList.vue';
import useClients from '../composables/useClients';

const { isLoading, clients, currentPage, totalPages, getPage } = useClients();

</script>

<template>
    <div>
        <h1>Listado de clientes</h1>

        <!-- Client List -->
        <ClientList :clients="clients" />

        <!-- PaginationNumbers -->

        <!-- LoadingModal -->

    </div>
</template>

<style scoped></style>