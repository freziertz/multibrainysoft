<script setup>
import { ref } from "vue";
// import { Inertia } from "@inertiajs/inertia";

import { Head, Link, useForm } from '@inertiajs/vue3';
// import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import AuthenticatedMainLayout from "@/Layouts/AuthenticatedMainLayout.vue";
import SectionBorder from "@/Components/SectionBorder.vue";
import Icon from "@/Components/Icon.vue";
// import Pagination from "@/Components/Pagination.vue";
// import Pagination from "@/Components/Pagination.vue";
// import ActionMessage from "@/Components/ActionMessage.vue";
// import FormSection from "@/Components/FormSection.vue";
// import InputError from "@/Components/InputError.vue";
// import InputLabel from "@/Components/InputLabel.vue";
// import PrimaryButton from "@/Components/PrimaryButton.vue";
// import SecondaryButton from "@/Components/SecondaryButton.vue";
// import TextInput from "@/Components/TextInput.vue";

const props = defineProps({
  tenants: Array,
  can:Object,
  translations: Object,
});
</script>
<template>
    <AuthenticatedMainLayout  :translations="translations">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Tenants
            </h2>
        </template>

        <div class="mx-4">
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                           <!-- <Head :title="`${t('tenants')}`" /> -->
                          
                            <!-- <h1 class="mb-8 text-3xl font-bold">Tenants</h1> -->
                           <div class="flex items-center justify-between mb-6">
                                <!-- <search-filter v-model="form.search" class="mr-4 w-full max-w-md" @reset="reset">
                                    <label class="block text-gray-700">Trashed:</label>
                                    <select v-model="form.trashed" class="form-select mt-1 w-full">
                                    <option :value="null" />
                                    <option value="with">With Trashed</option>
                                    <option value="only">Only Trashed</option>
                                    </select>
                                </search-filter> -->
                                
                                <Link class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition" href="/tenants/create">
                                    <span>Create</span>
                                    <span class="hidden md:inline">&nbsp;Tenant</span>
                                </Link>
                            </div>

                            <div class="bg-white rounded-md shadow overflow-x-auto">
                            <table class="w-full whitespace-nowrap">
                                <thead>
                                <tr class="text-left font-bold">
                                    <th class="pb-4 pt-6 px-6">Name</th>
                                    <th class="pb-4 pt-6 px-6">Database</th>
                                    <th class="pb-4 pt-6 px-6">Domain</th>
                                    <th class="pb-4 pt-6 px-6">First Name</th>
                                    <th class="pb-4 pt-6 px-6">Last Name</th>
                                    <th class="pb-4 pt-6 px-6">Email</th>
                                    <th class="pb-4 pt-6 px-6">Mobile</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="tenant in tenants" :key="tenant.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
                                    <td class="border-t">
                                        <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="`/tenants/${tenant.id}/edit`">
                                            {{ tenant.id }}
                                            <icon v-if="tenant.deleted_at" name="trash" class="flex-shrink-0 ml-2 w-3 h-3 fill-gray-400" />
                                        </Link>
                                    </td>

                                    <td class="border-t">
                                        <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="`/tenants/${tenant.id}/edit`">
                                            {{ tenant.tenancy_db_name }}
                                            <icon v-if="tenant.deleted_at" name="trash" class="flex-shrink-0 ml-2 w-3 h-3 fill-gray-400" />
                                        </Link>
                                    </td>

                                    <td class="border-t">
                                        <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="`/tenants/${tenant.id}/edit`">
                                            {{ tenant.domain }}
                                            <icon v-if="tenant.deleted_at" name="trash" class="flex-shrink-0 ml-2 w-3 h-3 fill-gray-400" />
                                        </Link>
                                    </td>

                                    <td class="border-t">
                                        <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="`/tenants/${tenant.id}/edit`">
                                            {{ tenant.first_name }}
                                            <icon v-if="tenant.deleted_at" name="trash" class="flex-shrink-0 ml-2 w-3 h-3 fill-gray-400" />
                                        </Link>
                                    </td>

                                    <td class="border-t">
                                        <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="`/tenants/${tenant.id}/edit`">
                                            {{ tenant.last_name }}
                                            <icon v-if="tenant.deleted_at" name="trash" class="flex-shrink-0 ml-2 w-3 h-3 fill-gray-400" />
                                        </Link>
                                    </td>

                                    <td class="border-t">
                                        <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="`/tenants/${tenant.id}/edit`">
                                            {{ tenant.email }}
                                            <icon v-if="tenant.deleted_at" name="trash" class="flex-shrink-0 ml-2 w-3 h-3 fill-gray-400" />
                                        </Link>
                                    </td>

                                    <td class="border-t">
                                        <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="`/tenants/${tenant.id}/edit`">
                                            {{ tenant.mobile }}
                                            <icon v-if="tenant.deleted_at" name="trash" class="flex-shrink-0 ml-2 w-3 h-3 fill-gray-400" />
                                        </Link>
                                    </td>



                                </tr>
                                <tr v-if="tenants.length === 0">
                                    <td class="px-6 py-4 border-t" colspan="4">No tenants found.</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                            <!-- <pagination class="mt-6" :links="tenants.links" /> -->
                        </div>
                    <SectionBorder />
                </div>
    </AuthenticatedMainLayout>
</template>
