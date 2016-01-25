describe('Task', function() {
  it("creates a new task with the given properties", function() {
    var testTask = new Task("Clean dishes", "Kitchen", "Tonight");
    expect(testTask.task).to.equal("Clean dishes");
    expect(testTask.place).to.equal("Kitchen");
    expect(testTask.deadline).to.equal("Tonight");
  });
});
