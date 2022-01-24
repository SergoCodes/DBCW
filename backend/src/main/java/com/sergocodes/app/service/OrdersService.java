package com.sergocodes.app.service;

import com.sergocodes.app.model.Orders;

import java.util.List;

public interface OrdersService {
    public Orders saveOrders(Orders orders);
    public List<Orders> getAllOrders();
}
