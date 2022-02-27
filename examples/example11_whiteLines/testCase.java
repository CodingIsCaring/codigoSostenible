class InventoryShould {

    @Test
    public void countItemsAfterAddingThem() {

        // Given
        Inventory inventory = new Inventory();

        // When
        inventory.addItem(new BlackSweater());
        inventory.addItem(new BlackSweater());

        // Then
        assertEquals(2, inventory.countStock(BlackSweater.class));
    }
}