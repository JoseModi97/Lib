<template>
    <main class="main-page" id="">
        <template v-if="pageReady">
            <template v-if="showHeader">
                <section class="page-section q-pa-md" >
                    <div class="container">
                        <div class="row justify-between items-center q-col-gutter-md">
                            <div  v-if="!isSubPage"  class="col-auto " >
                                <q-btn @click="$router.go(-1)"      flat :rounded="false"  size=""  color="primary"  no-caps  unelevated   class="" >
                                    <q-icon name="arrow_back"></q-icon>                             
                                </q-btn>
                            </div>
                            <div  class="col " >
                                <div class=" text-h6 text-primary" >
                                    Edit Book
                                </div>
                            </div>
                            <!--topcardactiontemplates-->
                        </div>
                    </div>
                </section>
            </template>
            <section class="page-section " >
                <div class="container">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col-md-9 col-12 comp-grid" >
                            <div >
                                <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-6">
                                    <q-form ref="observer"  @submit.prevent="submitForm()">
                                    <!--[form-content-start]-->
                                    <div class="row q-col-gutter-x-md">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Book Name *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlbook_name" v-model.trim="formData.book_name"  label="Book Name" type="text" placeholder="Enter Book Name"      
                                                    class="" :error="isFieldValid('book_name')" :error-message="getFieldError('book_name')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Author Id *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlauthor_id" v-model.trim="formData.author_id"  label="Author Id" type="number" placeholder="Enter Author Id"   step="any"    
                                                    class="" :error="isFieldValid('author_id')" :error-message="getFieldError('author_id')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Cat Id *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcat_id" v-model.trim="formData.cat_id"  label="Cat Id" type="number" placeholder="Enter Cat Id"   step="any"    
                                                    class="" :error="isFieldValid('cat_id')" :error-message="getFieldError('cat_id')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Book No *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlbook_no" v-model.trim="formData.book_no"  label="Book No" type="number" placeholder="Enter Book No"   step="any"    
                                                    class="" :error="isFieldValid('book_no')" :error-message="getFieldError('book_no')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Book Price *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlbook_price" v-model.trim="formData.book_price"  label="Book Price" type="number" placeholder="Enter Book Price"   step="any"    
                                                    class="" :error="isFieldValid('book_price')" :error-message="getFieldError('book_price')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--[form-content-end]-->
                                    <div v-if="showSubmitButton" class="text-center q-my-md">
                                        <q-btn    :rounded="false"  color="primary"  no-caps  unelevated   type="submit" icon-right="send" :loading="saving">
                                            {{ submitButtonLabel }}
                                            <template v-slot:loading>
                                                <q-spinner-oval />
                                            </template>
                                        </q-btn>
                                    </div>
                                    </q-form>
                                    <slot :submit="submitForm" :saving="saving"></slot>
                                </q-card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
        <template v-if="loading">
            <div style="min-height:200px" class="q-pa-sm text-center relative-position">
                <q-inner-loading color="primary" label="Loading..." showing></q-inner-loading>
            </div>
        </template>
    </main>
</template>
<script setup>
	import {  computed, ref, reactive, toRefs, onMounted } from 'vue';
	import { required, numeric, } from 'src/services/validators';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useEditPage } from 'src/composables/editpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		pageName: {
			type: String,
			default: 'books',
		},
		pageStoreKey: {
			type: String,
			default: 'BOOKS',
		},
		routeName: {
			type: String,
			default: 'booksedit',
		},
		pagePath: {
			type : String,
			default : 'books/edit',
		},
		apiPath: {
			type: String,
			default: 'books/edit',
		},
		submitButtonLabel: {
			type: String,
			default: "Update",
		},
		msgTitle: {
			type: String,
			default: "Update Record",
		},
		msgBeforeSave: {
			type: String,
			default: "",
		},
		msgAfterSave: {
			type: String,
			default: "Record updated successfully",
		},
		formValidationError: {
			type: String,
			default: "Form is invalid",
		},
		formValidationMsg: {
			type: String,
			default: "Please complete the form",
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
		showSubmitButton: {
			type: Boolean,
			default: true,
		},
		redirect: {
			type : Boolean,
			default : true,
		},
		isSubPage: {
			type : Boolean,
			default : false,
		},
	});
	
	const store = usePageStore(props.pageStoreKey);
	const app = useApp();
	
	const formDefaultValues = Object.assign({
		book_name: "", author_id: "", cat_id: "", book_no: "", book_price: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/books`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			book_name: { required },
		author_id: { required, numeric },
		cat_id: { required, numeric },
		book_no: { required, numeric },
		book_price: { required, numeric }
		}
	});
	
	const page = useEditPage({ store, props, formData, rules, afterSubmit });
	
	const {  saving, loading, pageReady,   } = toRefs(page.state);
	
	const {  currentRecord: editRecord } = toRefs(store.state);
	
	const { load, submitForm, isFieldValid, getFieldError,  } = page.methods;
	
	useMeta(() => {
		return {
			//set browser title
			title: "Edit Book"
		}
	});
	
	onMounted(()=>{ 
	});
</script>
<style scoped>
</style>
