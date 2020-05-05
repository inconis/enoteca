(function(api){api.controlConstructor['gp-customizer-typography']=api.Control.extend({ready:function(){var control=this;control.container.on('change','.generatepress-font-family select',function(){var _this=jQuery(this),_value=_this.val(),_categoryID=_this.attr('data-category'),_variantsID=_this.attr('data-variants');control.settings['family'].set(_this.val());if('undefined'==typeof control.settings['category']||'undefined'==typeof control.settings['variant']){return;}
setTimeout(function(){var response=jQuery.getJSON({type:'POST',url:ajaxurl,data:{action:'generate_get_all_google_fonts_ajax',gp_customize_nonce:gp_customize.nonce},async:false,dataType:'json',});var fonts=response.responseJSON;var id=_value.split(' ').join('_').toLowerCase();if(id in fonts){var got_variants=false;jQuery('.generatepress-font-family select').not(_this).each(function(key,select){var parent=jQuery(this).closest('.generatepress-font-family');if(_value==jQuery(select).val()&&_this.data('category')!==jQuery(select).data('category')){if(!got_variants){updated_variants=jQuery(parent.next('.generatepress-font-variant').find('select')).val();got_variants=true;}}});_this.closest('.generatepress-font-family').next('div').show();jQuery('select[name="'+_variantsID+'"]').find('option').remove();jQuery.each(fonts[id].variants,function(key,value){jQuery('select[name="'+_variantsID+'"]').append(jQuery('<option></option>').attr('value',value).text(value));});if(!got_variants){control.settings['variant'].set(fonts[id].variants);}else{control.settings['variant'].set(updated_variants);}
control.settings['category'].set(fonts[id].category);jQuery('input[name="'+_categoryID+'"').val(fonts[id].category);}else{_this.closest('.generatepress-font-family').next('div').hide();control.settings['category'].set('')
control.settings['variant'].set('')
jQuery('input[name="'+_categoryID+'"').val('');jQuery('select[name="'+_variantsID+'"]').find('option').remove();}},25);});control.container.on('change','.generatepress-font-variant select',function(){var _this=jQuery(this);var variants=_this.val();control.settings['variant'].set(variants);jQuery('.generatepress-font-variant select').each(function(key,value){var this_control=jQuery(this).closest('li').attr('id').replace('customize-control-','');var parent=jQuery(this).closest('.generatepress-font-variant');var font_val=api.control(this_control).settings['family'].get();if(font_val==control.settings['family'].get()&&_this.attr('name')!==jQuery(value).attr('name')){jQuery(parent.find('select')).not(_this).val(variants).triggerHandler('change');api.control(this_control).settings['variant'].set(variants);}});});control.container.on('change','.generatepress-font-category input',function(){control.settings['category'].set(jQuery(this).val());});control.container.on('change','.generatepress-font-weight select',function(){control.settings['weight'].set(jQuery(this).val());});control.container.on('change','.generatepress-font-transform select',function(){control.settings['transform'].set(jQuery(this).val());});}});})(wp.customize);jQuery(document).ready(function($){$('.generatepress-font-family select').select2();$('.generatepress-font-variant').each(function(key,value){var _this=$(this);var value=_this.data('saved-value');if(value){value=value.toString().split(',');}
_this.find('select').select2().val(value).trigger('change.select2');});$(".generatepress-font-family").each(function(key,value){var _this=$(this);if($.inArray(_this.find('select').val(),typography_defaults)!==-1){_this.next('.generatepress-font-variant').hide();}});});