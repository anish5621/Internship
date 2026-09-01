doTask1(function() {
    doTask2(function() {
        doTask3(function() {
            doTask4(function() {
                console.log("All tasks completed");
            });
        });
    });
});