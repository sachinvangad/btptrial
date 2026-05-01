namespace sap.cap.productshop;
entity Product {
    key ID       : Integer;
        name     : String;
        stock    : Integer;
        price    : String;
        category : Integer;
}

entity Supplier {
    key ID    : String;
        name  : String(100);
        city  : String(100);
        phone : String(100);
}
