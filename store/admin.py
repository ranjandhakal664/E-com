from django.contrib import admin
from .models import Customer,Order,OrderItem,Product,ShippingAddress,User
# admin.site.register(User)
admin.site.register(Customer)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Product)
admin.site.register(ShippingAddress)
# Register your models here.
